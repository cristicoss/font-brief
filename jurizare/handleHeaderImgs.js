import { supabase } from "../apiFonts.js";
import { store } from "../store.js";
// import { _getRealtimeChanges } from "./getRealTimeChanges.js";

async function uploadImgs(store) {
  const nameInput = document.getElementById("name-header-font");
  const foundryInput = document.getElementById("foundry");
  console.log(nameInput, foundryInput);
  let name = nameInput.value;
  let foundry = foundryInput.value;
  let fileKey = "";
  function generateImageName() {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    return `image_${timestamp}_${randomString}`;
  }

  fileKey = generateImageName();

  nameInput.onchange = () => {
    name = nameInput.value;
    // fileKey = nameInput.value;
  };
  foundryInput.onchange = () => {
    foundry = foundryInput.value;
  };

  // Upload the file to Supabase storage
  const fileInput = document.getElementById("file-input");
  const file = fileInput.files[0];
  if (file) {
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("header-imgs")
      .upload(fileKey, file, {
        cacheControl: "8640000", // Cache control in seconds (100 days)
      });

    if (uploadError) {
      console.error("Error uploading file:", uploadError);
      return;
    }

    // // Get the public URL of the uploaded file
    // const { publicURL, error: urlError } = await supabase.storage
    //   .from("header-imgs")
    //   .getPublicUrl(`${fileKey}.jpg`);

    // if (urlError) {
    //   console.error("Error getting public URL:", urlError);
    //   return;
    // }
    const publicURL = await supabase.storage
      .from("header-imgs")
      .getPublicUrl(fileKey);

    const imgUrl = publicURL.data.publicUrl;
    // store.headerImg = imgUrl;

    // Insert the name, foundry, and image URL into the Supabase table
    const { data: insertData, error: insertError } = await supabase
      .from("header-imgs")
      .insert([{ name: name, foundry: foundry, image_url: imgUrl }]);

    if (insertError) {
      console.error("Error inserting data:", insertError);
      return;
    }

    console.log("Data inserted successfully:", insertData);
    document.querySelector(".form-header_container").classList.add("hidden");
  } else {
    alert("Please select a file to upload.");
  }
}

const _getRealtimeChanges = async function () {
  console.log("getting changes...");
  // Create a function to handle inserts
  const handleChange = (payload) => {
    store.headerImg = payload.new;
  };

  // Listen to inserts
  supabase
    .channel("header-imgs")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "header-imgs" },
      handleChange
    )
    .on(
      "postgres_changes",
      { event: "DELETE", schema: "public", table: "header-imgs" },
      handleChange
    )
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "header-imgs" },
      handleChange
    )
    .subscribe();
};

export { uploadImgs, _getRealtimeChanges };

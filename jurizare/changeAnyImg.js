import { supabase } from "../apiFonts.js";

async function uploadAnyImg(
  imgToChange,
  currFontName,
  imgStorageToChange,
  store
) {
  let fileKey = "";
  function generateImageName() {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    return `${timestamp}_${randomString}`;
  }
  console.log(imgToChange, currFontName, imgStorageToChange);

  const fileInput = document.getElementById("file-input");
  const file = fileInput.files[0];
  console.log(file.name, file.name.substring(file.name.lastIndexOf(".")));
  const fileExt = file.name.substring(file.name.lastIndexOf("."));
  console.log(fileExt);
  fileKey = `${currFontName}/${currFontName}-${imgToChange}-${generateImageName()}${fileExt}`;
  console.log(fileKey);

  if (file) {
    // Upload the file to Supabase storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(`${imgStorageToChange}`)
      .upload(fileKey, file, {
        cacheControl: "8640000", // Cache control in seconds (100 days)
      });

    if (uploadError) {
      console.error("Error uploading file:", uploadError);
      return;
    }

    //// Aici am rama. eroare la databse
    const publicURL = await supabase.storage
      .from(`${imgStorageToChange}`)
      .getPublicUrl(fileKey);

    const imgUrl = publicURL.data.publicUrl;
    console.log(imgUrl);

    // Insert the name, foundry, and image URL into the Supabase table
    const { data: insertData, error: insertError } = await supabase
      .from(`${imgStorageToChange}`)
      .update({
        [imgToChange]: imgUrl,
      })
      .eq("Slug", currFontName);

    if (insertError) {
      console.error("Error inserting data:", insertError);
    } else {
      console.log("Data inserted successfully:", insertData);
    }

    console.log("Data inserted successfully:", imgUrl);
    document.getElementById("form-uploadImg_container").classList.add("hidden");
  } else {
    alert("Please select a file to upload.");
  }
}

export default uploadAnyImg;

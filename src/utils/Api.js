import axios from "axios";

export const getEnhanceImage = async (file) => {
  try {
    // upload image code
    const taskId = await uploadImage(file);
    console.log("Task ID:", taskId);

    // fetch Enhance image from api
    const enhanceImage = await fetchEnhanceImage(taskId);
    console.log("Enhance Image:", enhanceImage);
  } catch (error) {
    console.error("Error fetching enhanced image:", error.message);
  }
};

// Upload image code
export const uploadImage = async (file) => {
  const formData = new FormData();

  formData.append("image_file", file);

  const {data} = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": import.meta.env.VITE_API_KEY,
      },
    }
  );
  console.log("Image uploaded successfully:", data);
};

// Fetch Enhance image from api

export const fetchEnhanceImage = async () => {};

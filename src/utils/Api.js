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

  try {
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

    if (data && data.task_id) {
      return data.task_id; // Return the task ID for further processing
    }
  } catch (error) {
    console.error("Error uploading image:", error.message);
  }
};

// Fetch Enhance image from api

export const fetchEnhanceImage = async () => {};

import axios from "axios";

// a8c078d1-0dd8-47c3-acd1-b214ffdf39ff

export const getEnhanceImage = async (file) => {
  try {
    // upload image code
    const taskId = await uploadImage(file);
    console.log("Task ID:", taskId);

    // fetch Enhance image from api

    const enhanceImage = pollForEnchnaceImage(taskId);
    console.log("Enhance Image", enhanceImage);
    return enhanceImage;
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

  return data.data.task_id;
};

// Fetch Enhance image from api

export const fetchEnhanceImage = async (taskId) => {
  const {data} = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": import.meta.env.VITE_API_KEY,
      },
    }
  );

  if (data?.data) {
    console.log("failed to fetch enhance image");
  }
  return data.data;
};

// pollForenchanceimage

const pollForEnchnaceImage = async (taskId, retrires = 0) => {
  const result = await fetchEnhanceImage(taskId);

  if (result.state === 4) {
    console.log("Proccessing");

    if (retrires >= 20) {
      console.log("Reached limit, Please try again later..");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    return pollForEnchnaceImage(taskId, retrires + 1);
  }
  console.log("Enhance image URL :");
  return result;
};

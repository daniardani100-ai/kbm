async function apiPost(data) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    return await res.json();
  } catch (err) {
    return {
      success: false,
      message: err.message
    };
  }
}

async function apiGet(action) {
  try {
    const res = await fetch(
      `${API_URL}?action=${action}`
    );

    return await res.json();
  } catch (err) {
    return {
      success: false,
      message: err.message
    };
  }
}

const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express();
const PORT = 3000
app.use(express.json());
app.use(cors())
app.get('/image', async (req, res) => {
  try {
    const response = await fetch('https://api.unsplash.com/photos/?client_id=o3JmzdvQRPXVOkPQLfSUY8Z_zAGnCmnHGjVtTImGClI');
    if (response.ok) {
      const data = await response.json();
      const imageUrls = data.map(photo => photo.urls.regular);
      res.status(200).json({
        success: true,
        images: imageUrls
      });
    } else {
      console.log("Problem while fetching API");
      res.status(500).json({
        success: false,
        message: "Failed to fetch images"
      });
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
});

app.listen(PORT,()=>{
  console.log("App running")
})
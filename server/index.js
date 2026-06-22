const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const projects = [
 {
   id: 1,
   title: "Semi- & Self-Supervised Object Detection",
   period: "Fall 2025",
   course: "CSE 475 Final Project",
   description: "Implemented a label-efficient pipeline using YOLOv12n and SimCLR on the License Plate Recognition Dataset. Achieved mAP@0.5 of 96.30% using only 20% of labeled data.",
   tech: ["YOLOv12n", "SimCLR", "PyTorch", "Roboflow"]
 },
 {
   id: 2,
   title: "Baki-Khata: Digital Credit Management System",
   period: "Fall 2025",
   course: "CSE 347 Term Project",
   description: "Cross-platform (Android/Web) ledger app using React Native and Supabase (PostgreSQL) with Role-Based Authentication and real-time sync.",
   tech: ["React Native", "Supabase", "PostgreSQL", "Node.js"]
 },
 {
   id: 3,
   title: "Sequential Neural Network for SMS Spam Detection",
   period: "Summer 2025",
   course: "CSE 366 AI Project",
   description: "Sequential Neural Network with Embedding layers and Global Average Pooling using TensorFlow/Keras. Achieved 98.57% accuracy on the test dataset.",
   tech: ["TensorFlow", "Keras", "Python", "NLP"]
 }
];

app.get("/", (req, res) => {
 res.send("Portfolio API is running");
});

app.get("/projects", (req, res) => {
 res.json(projects);
});

app.post("/contact", (req, res) => {
 const { name, email, message } = req.body;

 if (!name || !email || !message) {
   return res.status(400).json({ error: "All fields are required" });
 }

 console.log("Contact form submitted:", { name, email, message });

 res.json({ message: "Message received successfully" });
});

app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});

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
    course: "CSE 475 \u2014 Machine Learning Final Project",
    description:
      "Implemented a label-efficient pipeline using YOLOv12n and SimCLR on the License Plate Recognition Dataset (Roboflow Universe). Achieved mAP@0.5 of 96.30% using only 20% of labeled data, recovering 99% of the fully supervised baseline performance with pseudo-labeling strategies.",
    tech: ["YOLOv12n", "SimCLR", "PyTorch", "Roboflow"],
    github: "https://github.com/shahriarsadik",
    demo: "",
  },
  {
    id: 2,
    title: "Baki-Khata: Digital Credit Management System",
    period: "Fall 2025",
    course: "CSE 347 \u2014 Information System Analysis and Design",
    description:
      "Led a team to build a cross-platform (Android/Web) ledger app using React Native and Supabase (PostgreSQL). Implemented real-time synchronization for transaction updates and offline detection mechanisms. Designed secure Role-Based Authentication for Shopkeeper and Customer interfaces.",
    tech: ["React Native", "Supabase", "PostgreSQL", "Node.js"],
    github: "https://github.com/shahriarsadik",
    demo: "",
  },
  {
    id: 3,
    title: "Sequential Neural Network for SMS Spam Detection",
    period: "Summer 2025",
    course: "CSE 366 \u2014 Artificial Intelligence Project",
    description:
      "Developed a Sequential Neural Network with Embedding layers and Global Average Pooling using TensorFlow/Keras. Achieved 98.57% accuracy and F1-score on the test dataset. Implemented text preprocessing including Tokenization, Padding, and Label Encoding.",
    tech: ["TensorFlow", "Keras", "Python", "NLP"],
    github: "https://github.com/shahriarsadik",
    demo: "",
  },
];

app.get("/", (req, res) => {
  res.json({ status: "Portfolio API is running" });
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ error: "Please provide a valid email address" });
  }

  console.log("Contact form submission:", { name, email, message });

  res.json({ message: "Thanks for reaching out! I'll get back to you soon." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

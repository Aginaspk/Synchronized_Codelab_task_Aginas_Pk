import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/pattern", (req, res) => {
  try {
    const matrix = new Array(JSON.parse(req.body.arr));
    const arr = matrix[0];
    console.log(arr);
    let maxSum = 0;
    let patterns = 0;
    let indexs = [];

    for (let i = 1; i < arr.length - 1; i++) {
      for (let j = 1; j < arr[0].length - 1; j++) {
        let center = arr[i][j];
        let top1 = arr[i - 1][j - 1];
        let top2 = arr[i - 1][j];
        let top3 = arr[i - 1][j + 1];
        let bottom1 = arr[i + 1][j - 1];
        let bottom2 = arr[i + 1][j];
        let bottom3 = arr[i + 1][j + 1];
        let sum = center + top1 + top2 + top3 + bottom1 + bottom2 + bottom3;
        if (maxSum < sum) {
          maxSum = sum;
          indexs = [
            [i - 1, j - 1],
            [i - 1, j],
            [i - 1, j + 1],
            [i, j],
            [i + 1, j - 1],
            [i + 1, j],
            [i + 1, j + 1],
          ];
        }
        patterns++;
      }
    } 
    console.log(patterns);

    return res.status(200).json({
      data: { patterns, indexs, maxSum },
    });
  } catch (error) {
    res.status(400).json({ err: error });
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// Ex3
let diem = 0;
const THRESHOLD_1 = 5;
const THRESHOLD_2 = 7;
const THRESHOLD_3 = 9;

if (!diem) {
  console.log("Chưa có điểm");
} else if (diem < 0 || diem > 10) {
  console.log("Điểm không hợp lệ");
} else if (diem >= THRESHOLD_3) {
  console.log("Xuất sắc");
} else if (diem >= THRESHOLD_2) {
  console.log("Giỏi");
} else if (diem >= THRESHOLD_1) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

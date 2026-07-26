// Ex1
let n = -7;

if (n == null || n == undefined) {
  console.log("Vui lòng nhập giá trị cho n.");
} else if (n == 0) {
  console.log("Số 0");
} else if (n > 0) {
  if (n % 2 == 0) {
    console.log("Số dương chẵn");
  } else {
    console.log("Số dương lẻ");
  }
} else {
  if (n % 2 == 0) {
    console.log("Số âm chẵn");
  } else {
    console.log("Số âm lẻ");
  }
}

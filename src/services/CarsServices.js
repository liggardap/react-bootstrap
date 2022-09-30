import axios from "axios";

const API_BASE_URL = "http://localhost:8080/abconline";
class CarsServices {
  getAllCar() {
    return axios.get(API_BASE_URL + "/getproduct");
  }
}
export default new CarsServices();

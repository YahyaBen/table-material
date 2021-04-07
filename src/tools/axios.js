import axios from "axios";

const TableTest = axios.create({
  baseURL: "http://192.168.1.56/breaktool/api",
  delayed: true,
});

async function getUsers() {
  return await TableTest({
    method: "post",
    url: "/user/getAdminData",
  });
}
export { getUsers };

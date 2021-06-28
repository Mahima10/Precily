import axios from "./api";

/**
 * Method to retrieve components details.
 * @param {*} id 
 */
export const retrieveComponentsData = async () => {

  return new Promise((resolve, reject) => {
    axios.get(`/api/components_data`)
      .then(async (response) => {
        console.log("data::response::", response)
        resolve(response);
      })
      .catch(error => {
        console.log("data::in catch::", error)
        reject(error);
      });
  });
}

/**
 * Method to update components data.
 * 
 * @param {*} reqData 
 */
export const updateComponentData = async (name, reqData) => {
  return new Promise((resolve, reject) => {
    console.log("utils: updateComponentData::reqData::", name, reqData);
    axios.patch(`/api/components_data/${name}`, reqData)
      .then(async (response) => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

/**
 * Method to retrieve add/update
 */
export const getAddUpdateCount= async () => {

  return new Promise((resolve, reject) => {
    axios.get(`/api/count`)
      .then(async (response) => {
        resolve(response);
      })
      .catch(error => {
        console.log("data::in catch::", error)
        reject(error);
      });
  });
}


/**
 * Method to delete components data.
 * 
 * @param {*} reqData 
 */
export const deleteComponentData = async (reqData) => {
  return new Promise((resolve, reject) => {
    console.log("deleteComponentData::reqData::", reqData);
    axios.delete(`/api/${reqData}`, reqData)
      .then(async (response) => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

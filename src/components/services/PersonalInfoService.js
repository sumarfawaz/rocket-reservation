import axios from "axios";

const LEONECHARTA_API_BASE_URL = "http://localhost:8080/api/v1/leonecharta"

class PersonalInfoService{
    saveLeoneCharta(values){
        return axios.post(LEONECHARTA_API_BASE_URL,values)
    }

    getLeoneChartaDataByEmail(email) {
        const url = `${LEONECHARTA_API_BASE_URL}?email=${email}`;
        return axios.get(url);
    }
}

export default new PersonalInfoService();
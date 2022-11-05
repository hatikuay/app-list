import React, { useEffect, useState } from 'react';
import axios from 'axios';

type User = { id: number; email: string; first_name: string; };
type GetUsersResponse = { data: User[]; };

const AxiosExample = () => {
    const [data, setData] = useState<GetUsersResponse>()

    const getUsers = async () => {
        await axios
            .get('https://reqres.in/api/users')
            .then((res) => {
                setData(res.data);
                console.log(JSON.stringify(res.data, null, 4));
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getUsers();

    }, [])

    return(<>
    </>)
}

export default AxiosExample;


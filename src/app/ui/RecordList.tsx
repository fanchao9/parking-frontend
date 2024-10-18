"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default async function RecordList () {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/records', {
            headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                 }
            })
            .then(response => {
                setRecords(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the records!', error);
            });
    }, []);

    return (
        <div>
            <h1>Record List</h1>
            <ul>
                {records}
            </ul>
            <button>Insert Record</button>
            <button>Leaving Record</button>
        </div>
    );
};

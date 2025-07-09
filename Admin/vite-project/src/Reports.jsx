import { useEffect, useState } from 'react';
import axios from 'axios';

const Reports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        axios.get('/api/reports')
            .then(res => setReports(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Reports</h2>
            <ul>
                {reports.map(report => (
                    <li key={report._id}>
                        Reported by: {report.user} — Reason: {report.reason}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reports;
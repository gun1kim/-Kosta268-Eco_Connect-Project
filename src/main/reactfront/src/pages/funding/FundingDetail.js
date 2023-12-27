
import React, {useEffect, useState} from "react";
import axios from "axios";
import moment from 'moment';
import Layout from "../../components/Layout/Layout";
import "./FundingView.css";
import {Margin} from "@mui/icons-material";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";


const FundingDetail = () => {
    const BASE_IMAGE_PATH = "../../assets/images/funding/view/";

    const [fundings, setFundings] = useState([]);

    useEffect(() => {
        const fetchFundings = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/funding');
                setFundings(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchFundings();
    }, []);


    const formatDate = (dateString) => {
        // Using moment.js for robust date parsing
        return moment(dateString).isValid() ? moment(dateString).format('YYYY-MM-DD HH:mm:ss') : 'Unavailable';
    };

    let listItemStyle = {
        margin: "50px",
        backgroundColor: "#ec8989",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        fontSize: "20px",
        fontFamily: "bold",
    };

    return (
        <Layout>
            <Card>
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>

            <div className="screen">
                <div className="div">
                </div>
            </div>
            <div className="funding-detail-image">
                <imgae src="../"></imgae>
            </div>
            <div>
                <h1 style={{textAlign: "center"}}>Funding Detail</h1>
                <ul>
                    {fundings.map(funding => (
                        <li key={funding.id} style={listItemStyle}>
                            <div>1. 제목: {funding.title}</div>
                            <div>2. 저자: {funding.author}</div>
                            <div>3. 카테고리 ID: {funding.fundingCategoryId} </div>
                            <div>4. 상태: {funding.status}</div>
                            <div>5. 내용: {funding.content}</div>
                            <div>6. 생성 날짜: {formatDate(funding.createdAt).toLocaleString()}</div>
                            <div>7. 종료 날짜: {formatDate(funding.endAt).toLocaleString()}</div>
                            <div>8. 좋아요: {funding.likes}</div>
                            <div>9. 수정 날짜: {formatDate(funding.modify_at).toLocaleString()}</div>
                            <div>10. 시작 날짜: {formatDate(funding.startAt).toLocaleString()}</div>
                            <br/>
                            <br/>
                        </li>
                    ))}
                </ul>
            </div>
                <button className="donate-button"
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginInline: '25%',
                            marginBottom: '25px',
                            marginLeft: '1600px',
                            maxWidth: '400px',
                            fontWeight: 'bold',
                            width: '150px',
                            backgroundColor: 'blue'
                        }}>
                    결제하기
                </button>
        </Layout>
    );
}

export default FundingDetail

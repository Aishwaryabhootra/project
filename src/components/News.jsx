import {React, useState} from 'react';
import moment from 'moment';
import { Select,Typography,Row,Col,Avatar,Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News=({simplified}) =>{

  const [newsCategory,setNewsCategory] = useState('Cryptocurrency')
  const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory,count: simplified?6:12})

  console.log(cryptoNews);

  return (
    <div>
      News
    </div>
  )
}

export default News;
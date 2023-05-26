import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../cards/ToyCard';

const ShopCategory = () => {
    const [allToy, setAllToy] = useState([]);
    const [activeTab, setActiveTab] = useState("sportscar");

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-ashaansojib.vercel.app/alltoys/category/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setAllToy(data)
            })
    }, [activeTab]);
    const handleTab = (tabValue) => {
        setActiveTab(tabValue)
    }
    return (
        <div className='my-container my-4'>
            <Tabs className="py-4">
                <TabList>
                    <Tab onClick={() => handleTab("sportscar")}>Sports Cars</Tab>
                    <Tab onClick={() => handleTab("firetruck")}>Fire Truck</Tab>
                    <Tab onClick={() => handleTab("policecar")}>Mini Police Car</Tab>
                </TabList>
                <TabPanel>
                    <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-around'>
                        {
                            allToy.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-around'>
                        {
                            allToy.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-around'>
                        {
                            allToy.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;
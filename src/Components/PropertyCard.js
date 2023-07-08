import React, { useEffect, useState } from 'react'
import makeAPIRequest from '../global/apiCall'
import API_CONST from '../global/apiKey'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MainInfo from './MainInfo';
import BasicInfo from './BasicInfo';
import ProInternalInfo from './ProInternalInfo';
import OwnerInfo from './OwnerInfo';
import ProAddress from './ProAddress';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';

function PropertyCard() {
    const [propertyData, setPropertyData] = useState([])
    const [propertyType, setPropertyType] = useState('commercial')
    const [activeTag, setActiveTag] = useState(1);

    // // Get List Of Sub Property Type
    useEffect(() => {
        makeAPIRequest('get', `${API_CONST.view_property}?type=${propertyType}`, null, null, null)
            .then((response) => {
                // console.log("🚀 ~ file: PropertyCard.js:28 ~ .then ~ response:", response)
                setPropertyData(response.data.data)
            })
            .catch(async (error) => {
                console.log(error);
            })
    }, [])

    // Set backgroundColor of activeTag
    const handleClick = (tagIndex, type) => {
        setActiveTag(tagIndex);
    };

    // Get List Of Sub Property Type when setPropertyType change
    // const handleChange = (event) => {
    //     setPropertyType(event.target.value)
    //     makeAPIRequest('get', `${API_CONST.view_property}?type=${event.target.value}`, null, null, null)
    //         .then((response) => {
    //             setPropertyData(response.data.data)
    //         })
    //         .catch(async (error) => {
    //             console.log(error);
    //         })
    // }

    const showInputFields = (index, subPropertyType) => {
        setSubPropertyType(subPropertyType)
    }

    const [age, setAge] = React.useState('');
    const [subPropertyType, setSubPropertyType] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        setCardCount(1)
    };
    const [cardCount, setCardCount] = useState(1);
    const handleNextCard = () => {
        setCardCount(cardCount + 1)
        console.log(cardCount);
        if (cardCount == 1) {
            document.getElementById(`basic_info`).style.display = "block"
        }
        else if (cardCount == 2){
            document.getElementById('internal_info').style.display = "block"
        }
        else if (cardCount == 3){
            document.getElementById('owner_info').style.display = "block"  
        }
        else if (cardCount == 4){
            document.getElementById('address_info').style.display = "block"  
        }
    }

    return (
        <div className='card-main-body'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card-body">
                            <div className="card-header-part">
                                <h3 className='mb-4'>Start posting your property, it's free</h3>
                            </div>
                            <div className="card-body-part mt-4">
                                <div className="looking-property">
                                    <span onClick={() => handleClick(1, 'sell')} className={activeTag === 1 ? 'bg-salmon' : ''}>Sell</span>
                                    <span onClick={() => handleClick(2, 'rent')} className={activeTag === 2 ? 'bg-salmon' : ''}>Rent</span>
                                </div>
                                <div className="radio-btns mt-5">
                                    <FormControl>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            defaultValue="commercial"
                                        >
                                            <FormControlLabel value="residential" control={<Radio />} label="Residential" onChange={handleChange} />
                                            <FormControlLabel value="commercial" control={<Radio />} label="Commercial" onChange={handleChange} />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className="property-type-details mt-2">
                                    {
                                        propertyData.map((items, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className='single-property' onClick={() => showInputFields(index, items.propertyInfo.subPropertyType)}>
                                                        {items.propertyInfo.subPropertyType}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <MainInfo handleNextCard={handleNextCard} cardCount={cardCount} subPropertyType={subPropertyType} />
                            </div>
                        </div>
                    </div>
                    <BasicInfo handleNextCard={handleNextCard} subPropertyType={subPropertyType} />
                    <ProInternalInfo handleNextCard={handleNextCard} subPropertyType={subPropertyType} />
                    <OwnerInfo handleNextCard={handleNextCard} subPropertyType={subPropertyType} />
                    <ProAddress handleNextCard={handleNextCard} subPropertyType={subPropertyType} />
                </div>
            </div>
        </div>
    )
}

export default PropertyCard


/**
 <div className="submit-btn mt-5">
                            <Stack direction="row" spacing={2}>
                                <Button fullWidth variant="contained"
                                    endIcon={<SendIcon />} style={{ padding: "15px 0", fontSize: "16px", fontWeight: "600" }}>
                                    Start Now
                                </Button>
                            </Stack>
                        </div>

 */
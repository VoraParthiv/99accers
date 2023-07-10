import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicInfo from './BasicInfo';

function MainInfo({ handleNextCard, subPropertyType, getPropertyDetails }) {

    return (
        <>
            {
                (subPropertyType == 'banquet halls' || subPropertyType == 'factory' || subPropertyType == 'plot' || subPropertyType == 'shop' || subPropertyType == 'retail' || subPropertyType == 'office') &&
                <>
                    <div className="d-flex gap-3 mt-4">
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name='furnitureType' onChange={getPropertyDetails} style={{ width: "50%" }}>
                            <option disabled selected>Select Type</option>
                            <option value="furniture" >Furniture</option>
                            <option value="unfurniture">Unfurniture</option>
                            <option value="semifurniture">Semifurniture</option>
                        </select>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name='authorized' onChange={getPropertyDetails} style={{ width: "50%" }}>
                            <option disabled selected>Autorized</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Measurment" variant="outlined" style={{ width: "100%", margin: "0" }} name='measurment' onChange={getPropertyDetails} />
                        <TextField className='mt-2' id="outlined-basic" label="Total Size" variant="outlined" style={{ width: "100%", margin: 0 }} name='totalSize' onChange={getPropertyDetails} />
                        <TextField className='mt-2' id="outlined-basic" label="Use Area" variant="outlined" style={{ width: "100%", margin: 0 }} name='useArea' onChange={getPropertyDetails} />
                        <TextField className='mt-2' id="outlined-basic" label="Open Area" variant="outlined" style={{ width: "100%", margin: 0 }} name='opneArea' onChange={getPropertyDetails} />
                        <TextField className='mt-2' id="outlined-basic" label="Cover Area" variant="outlined" style={{ width: "100%", margin: 0 }} name='coverdArea' onChange={getPropertyDetails} />
                    </Box>
                    <div className="submit-btn mt-5" onClick={handleNextCard}>
                        <i className="fa-solid fa-forward"></i>
                    </div>
                </>
            }

            {
                subPropertyType == 'hotel' &&
                <>
                    <div className="d-flex gap-3 mt-4">
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={getPropertyDetails} style={{ width: "50%" }}>
                            <option disabled selected>Select Type</option>
                            <option value="furniture" >With Boundry</option>
                            <option value="unfurniture">Without Boundry</option>
                        </select>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={getPropertyDetails} style={{ width: "50%" }}>
                            <option disabled selected>Autorized</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Measurment" variant="outlined" style={{ width: "100%", margin: "0" }} />
                        <TextField className='mt-2' id="outlined-basic" label="Total Size" variant="outlined" style={{ width: "100%", margin: 0 }} />
                        <TextField className='mt-2' id="outlined-basic" label="Use Area" variant="outlined" style={{ width: "100%", margin: 0 }} />
                        <TextField className='mt-2' id="outlined-basic" label="Open Area" variant="outlined" style={{ width: "100%", margin: 0 }} />
                        <TextField className='mt-2' id="outlined-basic" label="Cover Area" variant="outlined" style={{ width: "100%", margin: 0 }} />
                    </Box>
                    <div className="submit-btn mt-5" onClick={handleNextCard}>
                        <i className="fa-solid fa-forward"></i>
                    </div>
                </>
            }
        </>
    )
}

export default MainInfo

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function BasicInfo({ handleNextCard, subPropertyType, getPropertyDetails }) {
    return (
        <>
            {
                (subPropertyType == 'banquet halls' || subPropertyType == 'plot') &&
                <div className="col-lg-4 col-md-6 col-sm-12" id='basic_info' style={{ display: "none" }}>
                    <div className="card-body">
                        <h3 className='mb-4'>Property Basic Information</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"

                        >
                            <TextField name='ownerSince' onChange={getPropertyDetails} id="outlined-basic" label="Owenership Since" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
                            <TextField name='availibiltyDate' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" label="Availability Date" variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField name='attachment' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" type='file' variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField name='treeCount' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" label="Tree Count" variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField name='purchasedFrom' onChange={getPropertyDetails} className='mt-2' id="outlined-basic" label="Purchased From" variant="outlined" style={{ width: "100%", margin: 0 }} />
                        </Box>
                        <div className="submit-btn mt-5" onClick={handleNextCard}>
                            <i className="fa-solid fa-forward"></i>
                        </div>
                    </div>
                </div>
            }

            {
                (subPropertyType == 'shop' || subPropertyType == 'retail' || subPropertyType == 'office') &&
                <div className="col-lg-4 col-md-6 col-sm-12" id='basic_info' style={{ display: "none" }}>
                    <div className="card-body">
                        <h3 className='mb-4'>Property Basic Information</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"

                        >
                            <TextField id="outlined-basic" label="Owenership Since" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
                            <TextField className='mt-2' id="outlined-basic" label="Availability Date" variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField className='mt-2' id="outlined-basic" type='file' variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField className='mt-2' id="outlined-basic" label="Purchased From" variant="outlined" style={{ width: "100%", margin: 0 }} />
                        </Box>
                        <div className="submit-btn mt-5" onClick={handleNextCard}>
                            <i className="fa-solid fa-forward"></i>
                        </div>
                    </div>
                </div>
            }

            {
                (subPropertyType == 'hotel' || subPropertyType == 'factory') &&
                <div className="col-lg-4 col-md-6 col-sm-12" id='basic_info' style={{ display: "none" }}>
                    <div className="card-body">
                        <h3 className='mb-4'>Property Basic Information</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"

                        >
                            <TextField id="outlined-basic" label="Owenership Since" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "10px" }} />
                            <TextField className='mt-2' id="outlined-basic" label="Tree Count" variant="outlined" style={{ width: "100%", margin: 0 }} />
                            <TextField className='mt-2' id="outlined-basic" label="Purchased From" variant="outlined" style={{ width: "100%", margin: 0 }} />
                        </Box>
                        <div className="submit-btn mt-5" onClick={handleNextCard}>
                            <i className="fa-solid fa-forward"></i>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default BasicInfo

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function ProInternalInfo({ handleNextCard }) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12" id='internal_info' style={{ display: "none" }}>
            <div className="card-body">
                <h3 className='mb-4'>Property Internal Information</h3>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"

                >
                    <TextField id="outlined-basic" label="Max Ask" variant="outlined" style={{ width: "100%", margin: "0", marginTop: "0px" }} />
                    <div className=" m-0 mt-3" style={{ width: "fit-content" }}>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option disabled selected>Main Road Facing</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option disabled selected>Entry Gate</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option disabled selected>Car Park Area</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option disabled selected>Bathrooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option disabled selected>Pantry</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option disabled selected>Cabins</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option disabled selected>Wrokstations</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option disabled selected>Conference</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option disabled selected>Total Floors</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option disabled selected>Amenities</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option disabled selected>Maintainance Fee</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </Box>
                <div className="submit-btn mt-5" onClick={handleNextCard}>
                    <i className="fa-solid fa-forward"></i>
                </div>
            </div>
        </div>
    )
}

export default ProInternalInfo

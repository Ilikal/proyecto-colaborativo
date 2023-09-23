import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

const InputMod = (props) => {

    const {label, valor, defaultValue, disabled, alto} = props;

    return (
        <FormControl variant="standard" 
                     sx={{height:`${alto}` , 
                          flexGrow:"1", 
                          display: "flex", 
                          justifyContent: "center" , 
                          background:"var(--Blanco)", 
                          color:"var(--A100)", 
                          borderRadius:"10px", 
                          boxShadow:"0px 4px 4px #00000030", 
                          px:"10px" }} 
        >
            {/*<InputLabel>{label}</InputLabel>*/}
            <Input value={valor} defaultValue={defaultValue} fullWidth
                    sx={{color: "var(--A100)", fontWeight:"bold", fontSize:"25px", px:"25px", height:"4rem", borderBottom:"none", 
                         "::before":{borderBottom:"none"}, 
                         "::after":{borderBottom:"none"}, }}
            />
            <FormHelperText></FormHelperText>
        </FormControl>

    );
};

export default InputMod;
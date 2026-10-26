import { Grid } from "../components/GridLight/GridLight"

const data:number[][] = [
    [1,1,1],
    [1,0,0],
    [1,1,1],
]


function GridLightPage(){

    
    return (
        <Grid data={data}/>
    )
}

export default GridLightPage
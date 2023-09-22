const fs = require('fs');
const addnotes = function(title,body)
{
   const savenote1 = loadnote();
    
    savenote1.push(
        {
            title:title,
            body: body,
        }
    )

    savenote(savenote1);
}

const loadnote = function()
{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}
const savenote = function(savenote1)
{   
    const Jsondata = JSON.stringify(savenote1);
    const data1 = fs.writeFileSync('notes.json',Jsondata);
    const data = JSON.parse(Jsondata);
    console.log(data);
}

const removenotes = function(title)
{
    // const removedata = fs.unlinkSync(title);
    const remove1 = loadnote();
    const keepnote = remove1.filter(function(note)
    {
        if(note.title === title)
        {
            
        }
        return note.title !== title;
    })

    savenote(keepnote);
    console.log('removed title');
}

module.exports={
    addnotes : addnotes,
    removenotes : removenotes

}


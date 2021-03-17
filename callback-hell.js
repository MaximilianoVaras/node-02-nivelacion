const empleados = [
    {
        id: 1,
        nombre: "Pepe"
    },
    {
        id: 2,
        nombre: "Martae"
    },
    {
        id: 3,
        nombre:"Manuel"
    },


]
const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    },
    
]

const getSueldoById = (id, callback) => {
    const salario = sueldos.find ( (s) => s.id === id);

    if (salario) {
        callback(null, salario);
        return;
    }

    callback(new Error("No cobra sueldo"));

}

const id = 6;

getSueldoById(id, (error, sueldo) => {

        if (error) {
            console.log(`el empleado no cobra`);
            return;
        }

        console.log(`el empleado cobra `, sueldo);
    })
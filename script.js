setInterval(function(){
    $("time").text(dayjs().format("MMM DD, YYYY hh:mm:ss"))
}, 1000)

$('#saveProject').on('click', function(event){
    event.preventDefault();
    console.log('SAVING PROJECT');
    var name = $('#name').val();
    var type = $('#type').val();
    var dueDate = $('#date').val();
    var project = {
        name: name, 
        type: type, 
        dueDate: dueDate,
    }
    console.log(project)
    $("tbody").append(
        $("<tr>").append (
            $("<td>").text(name),
            $("<td>").text(type),
            $("<td>").text(dayjs(dueDate).format('MMMM D, YYYY')),
        )
    )
}) 

/* <th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td> */


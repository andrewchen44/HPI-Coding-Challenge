const AddTitle = (title) => {
    $.ajax({
        url: '/clicked',
        type: 'POST',
        data: JSON.stringify({ title: title}),
        contentType: 'application/json',
        success: function (response) {
            console.log(response.status);
        },
        error: function () {
            console.log("error");
        }
    }); 
  };
  
  export default AddTitle;
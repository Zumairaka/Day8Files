$(document).ready(function(){
    $("input").change(function(){
        let file = this.files;
        for(let i = 0;i<this.files.length;i++){
            console.log(this.files[i].name);
            console.log(this.files[i].lastModifiedDate);
            var reader = new FileReader();
            reader.readAsText(this.files[i]);
            reader.onload = (function(data){
                console.log(data.target.result);
            });
            reader.onerror = (function(data){
                console.log(data.target.error);
            });
        }
    });
});
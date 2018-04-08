function searchForm(){
 
    $(document).ready(() =>{
      //llamamos al boton y al buscador
      const search_form_field = document.getElementById("search-field");
      const search_form_button = document.getElementById("search-button");
      const search_text = $(search_form_field);

      search_text.on('keyup', () => {
        $(search_form_button).prop('disabled', !(search_text.val().length > 2));
      });

      
    });
      
}
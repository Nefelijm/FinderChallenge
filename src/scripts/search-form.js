function searchForm(){
 
    $(document).ready(() =>{
      //llamamos al boton y al buscador
      const search_form = document.getElementById('search-form');
      const search_form_field = document.getElementById("search-field");
      const search_form_button = document.getElementById("search-button");
      const results_content = document.getElementById("content");
      const search_text = $(search_form_field);
      
      //Validando que el boton se habilite si es mas de dos caracteres
      search_text.on('keyup', () => {
        $(search_form_button).prop('disabled', !(search_text.val().length > 2));
      });

      //autocompletado
      const URL = '/books-schema.json';

      loadJSON(URL,(response) =>{
        //condicion 
        const awesompleteOptions = {
          minChars: 3,
          maxItems: 7,
        };
        
        //recorriendo la data
        const list = response.data.map((item) => item.title);
          
          awesomplete = new Awesomplete(search_form_field, awesompleteOptions);
          awesomplete.list = list;
        
        })
    
      //buscador
      $(search_form).on('submit', (event) => {
        event.preventDefault();
         alert('f');
      });
  
  
     
     

    });
      
}
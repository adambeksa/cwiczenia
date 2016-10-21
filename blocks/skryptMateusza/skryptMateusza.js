// $(document).ready(function() {
//   var UrlObjective = new ShowUrl('#js-url-link-category','#js-url-link-article','#js-url-href');
//   var mtd = new MetaDescription('#js-meta-warning');
//   (new ParentText('#js-input-title','#js-url-input-article',specialMarksReplace, UrlObjective.replaceTitle)).autoSet();
//   (new ParentText('#js-input-title','#js-input-article-title')).autoSet();
//   (new ParentText('#js-desc','#js-meta-desc',null,mtd.checkLength)).autoSet();
//   (new Select('#js-select-category',specialMarksReplace,UrlObjective.replaceCategory)).listening();
//   //author
//   (new ParentsListening('#js-url-author-name','#js-url-author-last-name','#js-author-link')).listening()
// });
//
// function specialMarksReplace(string){
//   return string.replace(/ą/g, 'a').replace(/Ą/g, 'A')
//       .replace(/ć/g, 'c').replace(/Ć/g, 'C')
//       .replace(/ę/g, 'e').replace(/Ę/g, 'E')
//       .replace(/ł/g, 'l').replace(/Ł/g, 'L')
//       .replace(/ń/g, 'n').replace(/Ń/g, 'N')
//       .replace(/ó/g, 'o').replace(/Ó/g, 'O')
//       .replace(/ś/g, 's').replace(/Ś/g, 'S')
//       .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
//       .replace(/ź/g, 'z').replace(/Ź/g, 'Z')
//       .replace(/\s/g, '-').replace(/[^\w-]/gi, '').toLowerCase();
// }
// function ParentText(source,destination,filter,callback){
//   var $source = $(source);
//   var $destination = $(destination);
//   var editedByUser = ($destination.val() && $destination.val().length > 0 && $destination.val() != '/tu-bedzie-pochodna-tytulu/');
//   this.autoSet = function(){
//
//     $source.on('input',function(){
//       if(!editedByUser){
//         destinationSet();
//       }
//     });
//
//     $destination.on('input',function(){
//       if(filter)
//         $destination.val(filter($destination.val()));
//       editedByUser = true;
//       if(callback){
//         callback($destination.val());
//       }
//     });
//
//     $destination.on('focusout',function(){
//       var descValue = $destination.val();
//       if(descValue.length == 0){
//         editedByUser = false;
//         destinationSet();
//       }
//       else if(descValue.length > 0){
//         editedByUser = true;
//       }
//     })
//   }
//   function destinationSet(){
//     var value = (filter ? filter($source.val()) : $source.val());
//     $destination.val(value);
//     if(callback){
//       callback(value);
//     }
//   }
// };
//
//
// function ShowUrl(category, title, href){
//   var categoryValue;
//   var titleValue;
//   var $category = $(category);
//   var $title = $(title);
//   var href = $(href);
//
//   this.replaceCategory = function(value){
//     categoryValue = value;
//     $category.text(value);
//     setUrl();
//   };
//   this.replaceTitle = function(value){
//     titleValue = value;
//     $title.text(value);
//     setUrl();
//   };
//
//   function setUrl(){
//     href.attr('href','/'+categoryValue+'/'+titleValue);
//   }
// }
//
// function Select(select,filter,callback){
//   var $select = $(select);
//   var value;
//
//   this.listening = function () {
//     $select.on('change',function(){
//       value = $select.find("option[value="+this.value+"]").text();
//       if(filter){
//         value = filter(value);
//       }
//       if(callback){
//         callback(value);
//       }
//     })
//   }
// }
// function MetaDescription(metaWarningMessage){
//   var ready;
//   var length;
//   var $metaWarningMessage = $(metaWarningMessage);
//   var value;
//   displayMetaWarning(false);
//   ajaxRequest();
//   this.checkLength = function(value){
//     if(length){
//       if(length < value.length){
//         displayMetaWarning(true);
//       }
//       else{
//         displayMetaWarning(false);
//       }
//     }
//   };
//
//   function check(){
//
//   }
//
//   function ajaxRequest(){
//     $.ajax({
//       type: "GET",
//       url: "/admin/article/create/meta_length"
//     }).success(ajaxSuccess.bind(this))
//   }
//
//   function ajaxSuccess(result){
//     if(result && result.data && !(result.err)){
//       length = result.data.metaLength;
//     }
//     else{
//       length = 155;
//     }
//   }
//
//   function displayMetaWarning(flag){
//     if(flag){
//       $metaWarningMessage.css({display: "block"});
//     }
//     else{
//       $metaWarningMessage.css({display: "none"})
//     }
//   }
// }
//
//
//
// function ParentsListening(source1,source2,hrefText) {
//   var $source1 = $(source1);
//   var $source2 = $(source2);
//   var name = $source1.val() || null;
//   var lastName = $source2.val() || null;
//   var $hrefText = $(hrefText);
//
//   this.listening = function () {
//     $source1.on('input', function () {
//       name = $source1.val();
//       _replaceHref();
//     });
//
//     $source2.on('input', function () {
//       lastName = $source2.val();
//       _replaceHref();
//
//     });
//   };
//
//   function _replaceHref(){
//     console.log(name,lastName,$hrefText);
//     $hrefText.text(name+'-'+lastName);
//   }
// }
//

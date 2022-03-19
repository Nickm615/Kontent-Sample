// Initializes the Delivery JS SDK
const Kk = window['kontentDelivery'];

// Tip: Change the project ID of the API call to yours to display your own content. Make sure the codenames still match.
const deliveryClient = new Kk.DeliveryClient({
  projectId: '8d20758c-d74c-4f59-ae04-ee928c0816b7'
});

// Retrieves the content item from your project
deliveryClient
  .item('hello_headless_world')
  .elementsParameter(['headline', 'body_text', 'picture'])
  .toPromise()
  .then(response => {
    processData(response)});

// Processes the retrieved data and displays it on the page.
function processData(response) {
    const bodyText = response.item.body_text.value;
    const headline = response.item.headline.value;
    const picture = response.item.picture.value[0].url;

    document.getElementById("bodytext").innerHTML = bodyText;
    document.getElementById("headline").append(headline);
    document.getElementById("banner").src = picture;
}
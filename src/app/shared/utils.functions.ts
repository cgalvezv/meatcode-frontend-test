/**
 * Method that redirects to a particular url, using another browser tab as a target
 * @param url is the url to which you want to redirect
 * @author cgalvezv
 */
export const goToUrl = (url: string) => {
    window.open(url, '_blank');
}
import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
   
   public open (path: string) {
    if (path.startsWith('http')) {
        return browser.url(path)
    }
    return browser.url(`https://www.automationexercise.com/${path}`)
}
}

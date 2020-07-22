export default class ArticleInfo {
    constructor(title, image, text, date, source, url, sourceIndex) {
        this.title = title;
        this.image = image;
        this.text = text;
        this.source = source;
        this.url = url;
        this.sourceIndex = sourceIndex;

        let d = new Date(date);
        this.date = d.getTime();
        this.dateString = `${(d.getDate() < 10 ? '0' : '') + d.getDate()}.${(d.getMonth() + 1 < 10 ? '0' : '') + (d.getMonth() + 1)}.${d.getFullYear()} `
            + `${(d.getHours() < 10 ? '0' : '') + d.getHours()}:${(d.getMinutes() < 10 ? '0' : '') + d.getMinutes()}`;

        if (source.isHtml) {
            let el = document.createElement('html');
            this.text = this.text.replace(/http:\/\//g, 'https://');
            el.innerHTML = this.text;

            if (source.name === 'Die Zeit')
                console.log(el)

            if (source.textElementName === null)
                this.text = el.getElementsByTagName('body')[0].textContent;
            else if (el.getElementsByTagName(source.textElementName).length > 0)
                this.text = el.getElementsByTagName(source.textElementName)[0].textContent;

            if (el.getElementsByTagName(source.imageElementName).length > 0)
                this.image = el.getElementsByTagName(source.imageElementName)[0].getAttribute('src');
        }

        this.image = this.image.replace(/http:\/\//g, 'https://');
        this.url = this.url.replace(/http:\/\//g, 'https://');
        this.text = this.text.replace(/http:\/\//g, 'https://');
    }
}

class Button {
  template: string;
  buttonName: string | number;
  className: string;
  clickEvent: Function;

  constructor({ buttonName, className, clickEvent }: { buttonName: string | number, className: string, clickEvent: Function }) {
    this.buttonName = buttonName;
    this.className = className;
    this.clickEvent = clickEvent;
    this.template = `<button class='${this.className}'>${this.buttonName}</button>`;
  }

  getHtml(): string {
    return this.template;
  }

  //이 메서드를 밖에서 실행시킬 일이 있을까?
  private attachEvent(): boolean {
    try {
      // const buttons = document.querySelectorAll(this.className);
      // buttons.forEach((button) => {
      //   button.addEventListener('click', () => this.clickEvent());
      // });
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
}

const getImageButton = new Button({buttonName: '이미지 받기', className: 'get-image-button', clickEvent: () => {console.log('ㅋㅋ')}});
console.log(getImageButton.getHtml());

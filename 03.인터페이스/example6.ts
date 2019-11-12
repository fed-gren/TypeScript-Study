//인터페이스 끼리는 상속 가능!
interface IPerson6 {
  name: string;
}

interface IKorean extends IPerson6 {
  // name을 안써도 IKorean 은 name을 가지고 있어야 함.
  city: string;
}

const p6: IPerson6 = {
  name: 'Gren'
};

const k6: IKorean = {
  name: 'Gren',
  city: 'Siheung'
};

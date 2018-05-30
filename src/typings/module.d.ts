/* tslint:disable: no-namespace */

declare namespace ReactFadeIn {
  namespace FadeIn {
    interface Props {
      children: React.ReactNode;
    }
  }

  class FadeIn extends React.Component<FadeIn.Props> {}
}

declare module 'react-fade-in' {
  export = ReactFadeIn.FadeIn;
}

import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { breakpoints, theme } from '../styles/variables';

const FieldList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Field = styled.li`
  display: flex;
  flex: 0 0 50%;
  align-items: center;
  margin-bottom: 16px;

  @media screen and (min-width: ${breakpoints.desktop}) {
    flex-basis: calc(100% / 3);
  }
`;

const Image = styled(GatsbyImage)`
  width: 33px;
  height: auto;
  margin-right: 10px;
`;

const Name = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
`;

const Value = styled.span`
  display: block;
  color: ${theme.fg.wash};
  font-size: 14px;
`;

interface RandomInformationQueryData {
  chai: {
    childImageSharp: GatsbyImageProps;
  };
  computer: {
    childImageSharp: GatsbyImageProps;
  };
  globe: {
    childImageSharp: GatsbyImageProps;
  };
  japan: {
    childImageSharp: GatsbyImageProps;
  };
  vscode: {
    childImageSharp: GatsbyImageProps;
  };
}

export const RandomInformation = () => {
  const data = useStaticQuery<RandomInformationQueryData>(graphql`
    query RandomInformationQuery {
      chai: file(absolutePath: { regex: "/chai.png/" }) {
        childImageSharp {
          fixed(width: 33, height: 33) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      computer: file(absolutePath: { regex: "/computer.png/" }) {
        childImageSharp {
          fixed(width: 33, height: 33) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      globe: file(absolutePath: { regex: "/globe.png/" }) {
        childImageSharp {
          fixed(width: 33, height: 33) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      japan: file(absolutePath: { regex: "/japan.png/" }) {
        childImageSharp {
          fixed(width: 33, height: 33) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      vscode: file(absolutePath: { regex: "/vscode.png/" }) {
        childImageSharp {
          fixed(width: 33, height: 33) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <FieldList>
      <Field>
        <Image fixed={data.japan.childImageSharp.fixed} />
        <div>
          <Name>Nation</Name>
          <Value>Japan</Value>
        </div>
      </Field>

      <Field>
        <Image fixed={data.chai.childImageSharp.fixed} />
        <div>
          <Name>Favourite drink</Name>
          <Value>Chai</Value>
        </div>
      </Field>

      <Field>
        <Image fixed={data.vscode.childImageSharp.fixed} />
        <div>
          <Name>IDE</Name>
          <Value>VSCode</Value>
        </div>
      </Field>

      <Field>
        <Image fixed={data.computer.childImageSharp.fixed} />
        <div>
          <Name>Workstation</Name>
          <Value>MacBook Pro</Value>
        </div>
      </Field>

      <Field>
        <Image fixed={data.globe.childImageSharp.fixed} />
        <div>
          <Name>2nd languages</Name>
          <Value>English, Mandarin</Value>
        </div>
      </Field>
    </FieldList>
  );
};

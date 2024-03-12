import * as SC from './styled';
import { DATA } from './data';

export default () => {
  return (
    <SC.Container>
      <SC.Title>How Do We Do This</SC.Title>
      <SC.CardContainer>
        {DATA.map(i => (
          <SC.Card>
            <img src={i.icon} alt="" />
            <div>
              <p>{i.title}</p>
              <div>{i.description}</div>
            </div>
          </SC.Card>
        ))}
      </SC.CardContainer>
    </SC.Container>
  );
};


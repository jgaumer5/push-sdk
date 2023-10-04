import React, { useContext, useRef, useState } from 'react';
import { Section, Span } from '../../reusables';
import { ThemeContext } from '../theme/ThemeProvider';
import styled from 'styled-components';
import { device } from '../../../config';
import EditSvg from '../../../icons/EditSvg.svg';
import RemoveSvg from '../../../icons/RemoveSvg.svg';
import { ConditionType } from './Type';
import Criteria from './ConditionsComponent';
import { useClickAway } from '../../../hooks';

export type CriteraValueType = {
  invertedIcon?: any;
  id: number;
  type?: string;
  title?: string;
  icon?: string;
  function: () => void;
};

interface CriteriaProps {
  width?: string;
  dropdownValues: CriteraValueType[];
  conditionType:ConditionType
}

const MultipleCriterias = ({
  dropdownValues,
  width = '100%',
  conditionType
}: CriteriaProps) => {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [dropdownHeight, setDropdownHeight] = useState<number | undefined>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dropdownRef = useRef<any>(null);

  const dropDownValues = [
    {
      id: 0,
      value: 'Edit',
      title: 'Edit',
      icon: EditSvg,
      function: () => setSelectedValue(0),
    },
    {
      id: 1,
      value: 'Remove',
      title: 'Remove',
      icon: RemoveSvg,
      function: () => setSelectedValue(1),
    },
  ];
  const theme = useContext(ThemeContext);
  const [criteriaDetails, setCriteriaDetails] = useState<[]>([]);

  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);


  const toggleDropdown = (criteriaId: number) => {
    if (openDropdownId === criteriaId) {
      // Clicked on an already open dropdown, so close it
      setOpenDropdownId(null);
    } else {
      // Clicked on a different criteria, so open its dropdown
      setOpenDropdownId(criteriaId);
    }
  };

  useClickAway(dropdownRef, () => setSelectedIndex(null));

  return (
    <Section flexDirection="column" gap="8px">
      {
        dropdownValues && (
          // dropdownValues.map((criteria) => (
          <Section
            borderWidth="1px"
            justifyContent="center"
            alignItems="center"
            borderColor="#E6E7EE"
            borderRadius="12px"
            borderStyle="solid"
            padding="8px 0px 8px 8px"
          >
            <Criteria width="330px" dropdownValues={dropdownValues} conditionType={conditionType}/>
          </Section>
        )
        // )
        // )
      }
    </Section>
  );
};

export default MultipleCriterias;

const DropdownContainer = styled.div`
  position: absolute;
  left: 48%;
  top: 69%;
  border-radius: ${(props) => props.theme.borderRadius.modalInnerComponents};
  padding: 14px 8px;
  z-index: 999999999999 !important;
  display: flex;
  flex-direction: column !important;
  background: ${(props) => props.theme.backgroundColor.modalBackground};
  border: ${(props) => props.theme.border.modalInnerComponents};

  @media ${device.mobileL} {
    left: 27%;
  }
  @media (min-width: 426px) and (max-width: 1150px) {
    left: 48%;
  }
  @media (max-width: 480px) {
    left: 25%;
  }
};`;

const CriteriaContainer = styled(Section)`
  @media (max-width: 426px) {
    width: 280px;
  }
`;
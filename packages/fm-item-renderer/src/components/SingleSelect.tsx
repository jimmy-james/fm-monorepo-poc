import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Box, SingleSelect, SingleSelectChoice } from '@coreym/benchmark';
import { actions } from '@nextgen/store';
console.log('ACTIONS ', actions);

export const SingleSelectConnector = ({ inputId = 'Z00002_01' }: { inputId: string }): ReactElement => {
  const { MCSSClear, MCSSSelect, MCSSEliminate } = actions;
  const dispatch = useDispatch();
  const handleSelect = useCallback(({ optionId }) => dispatch(MCSSSelect({ optionId, inputId })), [dispatch]);
  const handleEliminate = useCallback(({ optionId }) => dispatch(MCSSEliminate({ optionId, inputId })), [dispatch]);
  const handleClear = useCallback(() => dispatch(MCSSClear({ inputId })), [dispatch]);

  return (
    <Box width="400px">
      <SingleSelect
        onClear={() => handleClear()}
        onEliminate={(option: string) => handleEliminate(option)}
        onChange={(option: string) => handleSelect(option)}
        selected={'a'}
        eliminated={null}
      >
        <SingleSelectChoice value="a">This is a really long label to test how well the text wraps</SingleSelectChoice>
        <SingleSelectChoice value="b">It is in a really small container</SingleSelectChoice>
        <SingleSelectChoice value="c">Small option</SingleSelectChoice>
      </SingleSelect>
    </Box>
  );
};

export default SingleSelectConnector;

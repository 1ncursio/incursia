import React, { useState, useCallback } from 'react';
import { Input, Tag, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput.ts';

const TagForm = ({ tags, setTags }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [inputValue, onChangeInputValue, setInputValue] = useInput('');
  const [editInputValue, onChangeEditInputValue, setEditInputValue] = useInput('');

  const onClose = useCallback(
    (removedTag) => {
      setTags(tags.filter((tag) => tag !== removedTag));
    },
    [tags]
  );

  const onBlurEditInput = useCallback(() => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue('');
  }, [tags, editInputIndex, editInputValue]);

  const onBlurInput = useCallback(() => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  }, [inputValue]);

  const showInput = useCallback(() => {
    setInputVisible(true);
  }, [inputVisible]);

  return (
    <>
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              type="text"
              autoFocus
              key={tag}
              size="small"
              value={editInputValue}
              onChange={onChangeEditInputValue}
              onBlur={onBlurEditInput}
              onPressEnter={onBlurEditInput}
              style={{ width: 78 }}
            />
          );
        }

        const isLongTag = tag.length > 10;

        const tagElem = (
          <Tag color="blue" key={tag} closable onClose={() => onClose(tag)}>
            <span
              onDoubleClick={(e) => {
                setEditInputIndex(index);
                setEditInputValue(tag);
                e.preventDefault();
              }}
            >
              {isLongTag ? `${tag.slice(0, 10)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible ? (
        <Input
          autoFocus
          type="text"
          size="small"
          value={inputValue}
          onChange={onChangeInputValue}
          onBlur={onBlurInput}
          onPressEnter={onBlurInput}
          style={{ width: 78 }}
        />
      ) : (
        <Tag color="blue" onClick={showInput}>
          <PlusOutlined />
          {' 추가'}
        </Tag>
      )}
    </>
  );
};

TagForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTags: PropTypes.func.isRequired,
};

export default TagForm;

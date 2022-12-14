import { Button, Divider } from 'antd';

export const Operation = (props: any) => {
  const { editing, rowIndex, record } = props;
  return (
    <div className="btnBox">
      {editing ? (
        <>
          <Button type="link" onClick={() => props.cancel()}>
            取消
          </Button>
          <Divider type="vertical" />
          <Button type="link" onClick={() => props.save(record)}>
            保存
          </Button>
        </>
      ) : (
        <>
          <Button type="link" onClick={() => props.edit(rowIndex)}>
            修改
          </Button>
          <Divider type="vertical" />
          <Button type="link" onClick={() => props.del(record)}>
            删除
          </Button>
        </>
      )}
    </div>
  );
};

import type { Meta, StoryObj } from "@storybook/react";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import TerminalIcon from "@mui/icons-material/Terminal";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";

const meta: Meta<typeof BottomNavigation> = {
  title: "KRDS/TabBars",
  component: BottomNavigation,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/WtWFDtQ92hZo9E9fTPFFqt/KRDS_v1.0.0--Community-?node-id=4935-98966&t=sEGrXQaCkuomtOh3-4",
    },
  },
  argTypes: {
    showLabels: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    value: {
      control: { type: "number" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BottomNavigation>;

export const ExampleTabBars: Story = {
  render: (args) => {
    // Using useState to control the selected tab
    const [value, setValue] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <BottomNavigation
        {...args}
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction label="홈" icon={<HomeIcon />} />
        <BottomNavigationAction label="마이" icon={<PersonIcon />} />
        <BottomNavigationAction
          label="민원"
          icon={<DescriptionOutlinedIcon />}
        />
        <BottomNavigationAction label="서비스" icon={<TerminalIcon />} />
        <BottomNavigationAction label="전체" icon={<MenuIcon />} />
      </BottomNavigation>
    );
  },
};

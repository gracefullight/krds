import type { IconProps } from "@gracefullight/krds-icons";
import type { Meta, StoryObj } from "@storybook/react";

import * as Icons from "@gracefullight/krds-icons";
import {
  Box,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";

const meta = {
  title: "KRDS/Icons",
  component: Icons.Time,
  parameters: {
    layout: "padded",
  },

  argTypes: {
    size: {
      control: {
        type: "radio",
        options: [12, 16, 20, 24, 32, 40],
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Displays all icons in a grid layout.
 */
export const AllIcons: Story = {
  args: {
    size: 24,
  },
  render: (args: IconProps) => {
    // State for icon search
    const [searchTerm, setSearchTerm] = useState("");

    // Get list of all icon names
    const iconNames = Object.keys(Icons).filter(
      (key) =>
        key !== "default" &&
        key !== "IconProps" &&
        typeof Icons[key as keyof typeof Icons] === "function",
    );

    // Filter icons by search term
    const filteredIcons = iconNames.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
      <Container maxWidth={false} disableGutters>
        <Box sx={{ mb: 3 }}>
          <Paper
            component="form"
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              width: 300,
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              p: 0.5,
            }}
          >
            <InputBase
              placeholder="Search by icon name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              sx={{ px: 1 }}
            />
          </Paper>
          <Box sx={{ mt: 1 }}>
            <Typography>Total: {filteredIcons.length} icons</Typography>
          </Box>
        </Box>

        <Grid container spacing={2}>
          {filteredIcons.map((iconName) => {
            const IconComponent = Icons[iconName as keyof typeof Icons];

            return (
              <Grid
                key={iconName}
                size={{
                  xsmall: 4,
                  small: 3,
                  medium: 2,
                  large: 1.5,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid #eee",
                    borderRadius: 1,
                    p: 1, // Reduced padding
                    transition: "all 0.2s",
                    cursor: "pointer",
                    "&:hover": {
                      boxShadow: 1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      my: 1,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconComponent {...args} />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "10px", // Reduced font size
                      fontFamily: "monospace",
                      width: "100%",
                      textAlign: "center",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      mt: 0.5, // Added top margin
                    }}
                  >
                    {iconName}
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  },
};

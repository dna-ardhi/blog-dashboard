import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

export interface AttributeField {
  key: string;
  label: string;
  description?: string;
}

export interface AttributeTableProps {
  /**
   * It contains all the keys and labels of the given `data`
   */
  fields: AttributeField[];
  /**
   * Data provided for rendering
   */
  data: { [key: string]: string | number | null };
  /**
   * Title of Table
   */
  title?: string;
  /**
   * Subtitle of Table
   */
  subtitle?: string;
}

/**
 * This is a component that is used to render data in the form of objects that only consist of keys and values
 */
export const AttributeTable: React.FC<AttributeTableProps> = ({
  fields,
  data,
  title,
  subtitle,
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        {title && (
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {subtitle}
          </Typography>
        )}
        <List aria-label="Data User Profile">
          {fields.map((field) => (
            <ListItem key={field.key} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={field.label}
                  secondary={field?.description}
                  secondaryTypographyProps={{
                    variant: 'caption',
                    color: 'text.secondary',
                  }}
                />
                <ListItemText
                  primary={data[field.key]}
                  primaryTypographyProps={{
                    sx: { textAlign: 'right' },
                    variant: 'body2',
                    color: 'text.secondary',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default React.memo(AttributeTable);

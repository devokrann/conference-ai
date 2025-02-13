'use client';

import React, { useEffect } from 'react';
// import ReactDOMServer from 'react-dom/server';
// import Link from 'next/link';
import { useState } from 'react';

import {
  // Anchor,
  Box,
  Button,
  // Checkbox,
  Grid,
  GridCol,
  Input,
  Select,
  // Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import {
  // isNotEmpty,
  useForm,
} from '@mantine/form';
// import { notifications } from '@mantine/notifications';
// import { IconCheck, IconX } from '@tabler/icons-react';

// import { IMaskInput } from 'react-imask';
// import emailjs from '@emailjs/browser';

// import postContact from "@/apis/postContact";
// import email from "../email";

export default function Sponsorship() {
  const [
    submitted,
    // setSubmitted
  ] = useState(false);
  const [message, setMessage] = useState('');

  const form = useForm({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      policy: false,
    },

    validate: {
      fname: (value) => (value.trim().length < 2 ? 'At least 2 letters' : null),
      lname: (value) => (value.trim().length < 2 ? 'At least 2 letters' : null),
      email: (value) =>
        /^\S+@\S+$/.test(value.trim()) ? null : 'Invalid email',
      phone: (value) =>
        value && value.trim().length < 18 ? 'Invalid Phone Number' : null,
      subject: (value) =>
        value.trim().length < 1 ? 'Please select a topic' : null,
      message: (value) =>
        value.trim().length < 10 ? 'Message Too Short' : null,
      // policy: isNotEmpty("You must accept to proceed"),
    },
  });

  // const handleSubmit = async () => {
  //   if (form.isValid()) {
  //     setSubmitted(true);

  //     const templateParams = {
  //       fname:
  //         form.values.fname.trim().toLowerCase().charAt(0).toUpperCase() +
  //         form.values.fname.trim().slice(1).toLowerCase(),
  //       lname:
  //         form.values.lname.trim().toLowerCase().charAt(0).toUpperCase() +
  //         form.values.lname.trim().slice(1).toLowerCase(),
  //       email: form.values.email.trim().toLowerCase(),
  //       phone: form.values.phone,
  //       subject:
  //         form.values.subject == 'Other' ? 'General' : `${form.values.subject}`,
  //       message: form.values.message.trim(),
  //     };

  //     // console.log(templateParams);

  //     await emailjs
  //       .send(
  //         'gmail_service',
  //         'general_inquiries',
  //         templateParams,
  //         'WIhPTsJnYGDJDfdIP'
  //       )
  //       .then(() => {
  //         notifications.show({
  //           id: 'contact-form-success',
  //           withCloseButton: false,
  //           color: 'pri.6',
  //           icon: <IconCheck size={16} stroke={1.5} />,
  //           autoClose: 10000,
  //           title: 'Inquiry Sent',
  //           message: 'Someone will get back to you within 24 hours',
  //           styles: (theme) => ({
  //             icon: {
  //               color: theme.colors.sec[4],
  //             },
  //             closeButton: {
  //               color: theme.colors.pri[6],
  //             },
  //           }),
  //         });
  //       })
  //       .then(() =>
  //         notifications.show({
  //           id: 'contact-form-success',
  //           withCloseButton: false,
  //           color: 'pri',
  //           icon: <IconCheck size={16} stroke={1.5} />,
  //           autoClose: 5000,
  //           title: 'Inquiry Sent',
  //           message: 'Someone will get back to you within 24 hours',
  //           styles: (theme) => ({
  //             icon: {
  //               color: theme.colors.sec[4],
  //             },
  //             closeButton: {
  //               color: theme.colors.pri[6],
  //             },
  //           }),
  //         })
  //       )
  //       .then(() => form.reset())
  //       .catch((error) =>
  //         notifications.show({
  //           id: 'contact-form-fail',
  //           color: 'red',
  //           icon: <IconX size={16} stroke={1.5} />,
  //           autoClose: 5000,
  //           title: 'Send Failed',
  //           message: `Error: ${error.message}`,
  //           styles: (theme) => ({
  //             closeButton: {
  //               color: theme.colors.red[6],
  //             },
  //           }),
  //         })
  //       );

  //     setSubmitted(false);
  //   }
  // };

  useEffect(() => {
    if (form.values.subject == 'Booth Registration') {
      setMessage('Kindly include the booth type in your message');
    } else if (form.values.subject == 'Sponsorship Application') {
      setMessage(
        'Kindly include the organization you represent and the sponsorship package of choice in your message'
      );
    } else {
      setMessage('');
    }
  }, [form.values.subject]);

  return (
    <Box
      component="form"
      // onSubmit={form.onSubmit(handleSubmit)}
      noValidate
    >
      <Grid pb={'md'}>
        <GridCol span={{ base: 12, sm: 6, md: 4 }}>
          <TextInput
            required
            label={'First Name'}
            placeholder="Your Name"
            {...form.getInputProps('fname')}
          />
        </GridCol>
        <GridCol span={{ base: 12, sm: 6, md: 4 }}>
          <TextInput
            required
            label={'Last Name'}
            placeholder="Your Name"
            {...form.getInputProps('lname')}
          />
        </GridCol>
        <GridCol span={{ base: 12, sm: 6, md: 4 }}>
          <Input.Wrapper label={'Phone'} id="phone">
            <Input
              // component={IMaskInput}
              // mask={'+(254) 700 000-000'}
              id="phone"
              placeholder="Your Phone"
              {...form.getInputProps('phone')}
            />
          </Input.Wrapper>
        </GridCol>
        <GridCol span={{ base: 12, sm: 6 }}>
          <Select
            label="Inquiry"
            description="What are you inquiring about?"
            placeholder="Select an inquiry"
            // defaultValue={null}
            data={[
              { label: 'Select an Inquiry', value: '' },
              {
                label: 'Booth Registration',
                value: 'Booth Registration',
              },
              {
                label: 'Sponsorship Application',
                value: 'Sponsorship Application',
              },
              { label: 'Other', value: 'other' },
            ]}
            required
            {...form.getInputProps('subject')}
          />
        </GridCol>
        <GridCol span={{ base: 12, sm: 6 }}>
          <Input.Wrapper
            label={'Email'}
            description="We will never share your email"
            id="email"
            required
          >
            <Input
              id="email"
              // component={IMaskInput}
              type="email"
              placeholder="Your Email"
              {...form.getInputProps('email')}
            />
          </Input.Wrapper>
        </GridCol>
        <GridCol span={12}>
          <Textarea
            label={'Message'}
            description={message}
            required
            placeholder={'Write your message here...'}
            autosize
            minRows={2}
            maxRows={10}
            {...form.getInputProps('message')}
          />
        </GridCol>
        {/* <GridCol span={{ base: 12, sm: 12 }}>
					<Checkbox
						size="xs"
						label={
							<Text inherit>
								I have read and accept the{" "}
								<Anchor component={Link} to={"/policy/terms-and-conditions"} inherit fw={500}>
									terms of use
								</Anchor>
								.
							</Text>
						}
						{...form.getInputProps("policy", { type: "checkbox" })}
					/>
				</GridCol> */}
        <GridCol span={{ base: 12, sm: 6 }}>
          <Button
            type="reset"
            fullWidth
            onClick={() => form.reset()}
            disabled={submitted}
          >
            Clear
          </Button>
        </GridCol>
        <GridCol span={{ base: 12, sm: 6 }}>
          <Button
            type="submit"
            fullWidth
            loading={submitted}
            color={'sec'}
            c={'dark.9'}
          >
            {submitted ? 'Submitting' : 'Submit'}
          </Button>
        </GridCol>
      </Grid>
    </Box>
  );
}
